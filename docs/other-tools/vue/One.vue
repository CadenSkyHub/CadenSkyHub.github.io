<script setup>
import {ref} from "vue";
import VueDatePicker from '@vuepic/vue-datepicker';
import '@vuepic/vue-datepicker/dist/main.css'

const startTime = ref({
    hours: '00',
    minutes: '00',
    seconds: '00'
})

const stopTime = ref({
    hours: '0',
    minutes: '0',
    seconds: '0'
})

const textInputOptions = {
    format: 'HH:mm:ss'
};

// 转为秒数
const getSeconds = (time) => {
    const hs = Number(time.hours) * 3600
    const ms = Number(time.minutes) * 60
    return hs + ms + Number(time.seconds)
}

// 计算秒数差
const differenceSeconds = (startTime, stopTime) => {
    if (getSeconds(stopTime) < getSeconds(startTime)) {
        alert('开始时间不可大于结束时间')
        location.reload()
    } else {
        return getSeconds(stopTime) - getSeconds(startTime)
    }
}

// 将结果换算为 x小时x分钟x秒
const getResult = (sec) => {
    const hours = Math.floor(sec / 3600)
    const minutes = Math.floor((sec % 3600) / 60)
    const seconds = sec % 60
    return [hours, minutes, seconds]
}

// 结果
const result = ref("xx 小时  xx 分钟  xx 秒")

const compute = () => {
    // console.log(differenceSeconds(startTime.value, stopTime.value))
    const res = getResult(differenceSeconds(startTime.value, stopTime.value))
    result.value = `${res[0]} 小时  ${res[1]} 分钟  ${res[2]} 秒`
}

</script>

<template>
    <div class="one-box">
        <div class="one-label">
            <div class="one-label-text">开始时间：</div>
            <VueDatePicker
                v-model="startTime"
                enable-seconds
                time-picker
                select-text="选择"
                cancel-text="取消"
                :text-input="textInputOptions"
            />
        </div>

        <div class="one-label">
            <div class="one-label-text">结束时间：</div>
            <VueDatePicker
                v-model="stopTime"
                enable-seconds
                time-picker
                select-text="选择"
                cancel-text="取消"
                :text-input="textInputOptions"
            />
        </div>

        <div class="one-label">
            <div>计算结果：</div>
            {{ result }}
        </div>


        <div>
            <button class="one-button" @click="compute">计算</button>
        </div>
    </div>
</template>

<style scoped>
.one-box {
    display: flex;
    flex-direction: column;
    gap: 10px;

    max-width: 400px;
    margin: 0 auto;

    border: 1px solid #0094c8;
    padding: 15px;
    border-radius: 5px;
    background-color: #c1e4e9;
    color: black;
}

.one-label {
    display: grid;
    grid-template-columns: 90px 1fr;
    align-items: center;
}



.one-button {
    color: white;
    background-color: #0094c8;
    width: 100%;
    padding: 5px;
    border-radius: 6px;
    font-weight: bold;
}

</style>