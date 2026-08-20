<script setup>
    import { ref } from 'vue';
    import { cityList, itemList } from './Store';
    const cityInd = ref(-1);
    const disInd = ref(-1);
    const disData = ref([]);
    const comData = ref([]);
    const getDistrict = () =>{
        disData.value = cityList.value[cityInd.value]['sub'];
        console.log(disData.value);
    }
    const getCommune = () =>{
        comData.value = disData.value[disInd.value]['sub'];
    }
</script>

<template>
    <div class="container" style="padding-block: 15px;">
        <div class="row">
            <div class="col-xxl-4 col-lx-4 col-lg-4">
                <select class="form-control" @change="getDistrict" v-model="cityInd">
                    <option value="-1">Select city</option>
                    <option :value="i" v-for="(city, i) in cityList" :key="i">
                        {{ city.name }}
                    </option>
                </select>
            </div>
            <div class="col-xxl-4 col-lx-4 col-lg-4">
                <select class="form-control" @change="getCommune" v-model="disInd">
                    <option value="-1">Select district</option>
                    <option :value="i" v-for="(dis, i) in disData" :key="i">
                        {{dis.name}}
                    </option>
                </select>
            </div>
            <div class="col-xxl-4 col-lx-4 col-lg-4">
                <select class="form-control">
                    <option value="-1">Select commune</option>
                    <option :value="i" v-for="(data, i) in comData" :key="i">
                        {{data}}
                    </option>
                </select>
            </div>
        </div>
    </div>
</template>