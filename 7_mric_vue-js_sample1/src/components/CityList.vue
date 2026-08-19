<script setup>
    import { cityList } from './Store';
</script>

<template>
    <div class="container" style="padding-block: 15px;">
        <div class="row">
            <div class="col-xxl-4 col-lx-4 col-lg-4">
                <select class="form-control">
                    <option value="-1">Select city</option>
                    <option :value="i" v-for="(city, i) in cityList" :key="i">{{ city.name }}</option>
                </select>
            </div>
            <div class="col-xxl-4 col-lx-4 col-lg-4">
                <select class="form-control"></select>
            </div>
            <div class="col-xxl-4 col-lx-4 col-lg-4">
                <select class="form-control"></select>
            </div>
        </div>
    </div>
</template>