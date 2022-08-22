<template>

    <div class="py-6">

        <div class="max-w-7xl mx-auto px-4 sm:px-6 md:px-8">

            <div>

                <div class="mt-2 mb-6 md:flex md:items-center md:justify-between">
                    <div class="flex-1 min-w-0">
                        <h2 class="text-2xl font-bold leading-7 text-gray-900 sm:text-3xl sm:truncate">
                            Unauthorized
                        </h2>
                    </div>
                </div>

                <div>
                    <p>You are not authorized to use this application.  If you believe this is an error, please contact your IT Support team.</p>
                </div>

            </div>

        </div>

    </div>

</template>

<script lang="ts">
    import { defineComponent } from 'vue';

    export default defineComponent({
        name: 'Unauthorized',
    })
</script>