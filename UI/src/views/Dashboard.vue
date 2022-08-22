<template>

    <div class="py-6">

        <div class="max-w-7xl mx-auto px-4 sm:px-6 md:px-8">

            <div>
                <div>

                    <nav class="sm:hidden" aria-label="Back">
                        <a href="#" class="flex items-center text-sm font-medium text-gray-500 hover:text-gray-700">
                            <ChevronLeftIcon class="flex-shrink-0 -ml-1 mr-1 h-5 w-5 text-gray-400" aria-hidden="true" />
                            Back
                        </a>
                    </nav>

                    <nav class="hidden sm:flex" aria-label="Breadcrumb">
                        <ol role="list" class="flex items-center space-x-4">
                            <li>
                                <div class="flex">
                                    <a href="/" class="text-sm font-medium text-gray-500 hover:text-gray-700">Home</a>
                                </div>
                            </li>
                            <li>
                                <div class="flex items-center">
                                    <ChevronRightIcon class="flex-shrink-0 h-5 w-5 text-gray-400" aria-hidden="true" />
                                    <a href="#" aria-current="page" class="ml-4 text-sm font-medium text-gray-500 hover:text-gray-700">Dashboard</a>
                                </div>
                            </li>
                        </ol>
                    </nav>
                </div>

                <div class="mt-2 md:flex md:items-center md:justify-between">
                    <div class="flex-1 min-w-0">
                        <h2 class="text-2xl font-bold leading-7 text-gray-900 sm:text-3xl sm:truncate">
                            Dashboard
                        </h2>
                    </div>
                </div>
            </div>

        </div>

    </div>

</template>

<script lang="ts">
    import { defineComponent } from 'vue';

    import {
        ChevronLeftIcon,
        ChevronRightIcon,
    } from '@heroicons/vue/solid';

    export default defineComponent({
        name: 'Dashboard',

        components: {
            ChevronLeftIcon,
            ChevronRightIcon
        },
    })
</script>