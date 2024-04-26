<script setup lang="ts">
import { reactive, ref } from 'vue';
import { useUserStore } from '@/store/user'
import { storeToRefs } from 'pinia';
import { useRouter } from 'vue-router'

const store = useUserStore()
console.log(store)
store.updateNameSync('同步')

store.updateName('异步')

const { name, age, sex } = storeToRefs(store)

const justifyOptions = reactive([
  'flex-start',
  'center',
  'flex-end',
  'space-between',
  'space-around',
  'space-evenly',
]);
const alignOptions = reactive(['flex-start', 'center', 'flex-end']);
const justify = ref(justifyOptions[0]);
const alignItems = ref(alignOptions[0]);
const boxStyle = {
  width: '100%',
  height: '120px',
  borderRadius: '6px',
  border: '1px solid #40a9ff',
};

const router = useRouter()

const MyHome = () => {
  router.push({path:'/MyHome'})
}
const about = () => {
  router.push({path:'/about/About'})
}
</script>

<template>
  <div>
    <div>{{ name }}{{ age }}{{ sex }}</div>
    <div>
      <a-button @click="about">about</a-button>
      <a-button type="primary" @click="MyHome">MyHome</a-button>
    </div>
    <a-flex gap="middle" align="start" vertical>
    <p>Select justify :</p>
    <a-segmented v-model:value="justify" :options="justifyOptions" />
    <p>Select align :</p>
    <a-segmented v-model:value="alignItems" :options="alignOptions" />
    <a-flex :style="{ ...boxStyle }" :justify="justify" :align="alignItems">
      <a-button type="primary">Primary</a-button>
      <a-button type="primary">Primary</a-button>
      <a-button type="primary">Primary</a-button>
      <a-button type="primary">Primary</a-button>
    </a-flex>
  </a-flex>
  </div>
</template>

<style scoped>

</style>
