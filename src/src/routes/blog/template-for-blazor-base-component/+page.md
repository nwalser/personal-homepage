---
title: How to blablabla
---


```Csharp
public class DataComponentBase : ComponentBase
{
    protected Exception? OnUpdateDataException;
    protected ComponentState State { get; set; } = ComponentState.OnLoadingData;

    private SemaphoreSlim Semaphore { get; } = new(1);
    private int SemaphoreTimeout { get; } = 10;

    protected async Task UpdateDataThreadSaveAsync()
    {
        if (await Semaphore.WaitAsync(SemaphoreTimeout))
        {
            try
            {
                await OnUpdateDataAsync();
                State = ComponentState.OnDataLoaded;
            }
            catch (Exception ex)
            {
                OnUpdateDataException = ex;
                State = ComponentState.OnException;
            }
            finally
            {
                await InvokeAsync(StateHasChanged);
                Semaphore.Release();
            }
        }
        else
        {
            await OnUpdateDataSkippedAsync();
        }
    }

    protected override async Task OnParametersSetAsync()
    {
        await UpdateDataThreadSaveAsync();
        await base.OnParametersSetAsync();
    }

    protected virtual Task OnUpdateDataAsync()
    {
        return Task.CompletedTask;
    }

    protected virtual Task OnUpdateDataSkippedAsync()
    {
        return Task.CompletedTask;
    }
}

public enum ComponentState
{
    OnLoadingData,
    OnDataLoaded,
    OnException
}
```

``` CSharp
public class PersonEntityBase : DataComponentBase
{
    [Parameter] public Guid BatchId { get; set; }

    protected BatchEntity? Entity { get; private set; }

    protected override async Task OnUpdateDataAsync()
    {
        // data fetching logic goes here

        await base.OnUpdateDataAsync();
    }
}
```


```razor
@inherits BatchEntityBase

@if (State == ComponentState.OnDataLoaded)
{
    // display content of file
}
else if (State == ComponentState.OnLoadingData)
{
    <MudSkeleton Height="200px"/>
}
else
{
    <EspNotFoundSkeleton Height="200px"/>
}
```