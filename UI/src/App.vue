<template>

    <div class="h-screen flex overflow-hidden bg-gray-100">

        <div class="flex flex-col w-0 flex-1 overflow-hidden">

            <main class="flex-1 relative overflow-y-auto focus:outline-none">
                <router-view />
            </main>

        </div>
    </div>

</template>

<script lang="ts">
    
    export default {

        components: {
        },

    }
    
</script>