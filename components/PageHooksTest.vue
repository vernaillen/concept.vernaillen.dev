<template>
    <div>
        <div>
            page:finish : 
            <div 
                :class="usePageHooks().isPageFinished.value ? 'i-mdi-check' : 'i-ph-spinner animate-spin'" 
                class="text-2xl inline-block">
            </div>
        </div>
        <div>
            app:mounted : 
            <div 
                :class="usePageHooks().isAppMounted.value ? 'i-mdi-check' : 'i-ph-spinner animate-spin'" 
                class="text-2xl inline-block">
            </div>
        </div>
    </div>
</template>