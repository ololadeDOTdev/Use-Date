<template>
  <h1>Date: {{ currentDate }}</h1>
  <h1>Day: {{ day }}</h1>
  <h1>Month: {{ month }}</h1>

  <form @submit.prevent="AddDate">
    <div>
      <label for="day"> Day: </label>
      <input
        type="number"
        name="day"
        placeholder="Enter Day"
        v-model="dateobj.day"
      />
    </div>

    <div>
      <label for="month"> Month: </label>
      <input
        type="number"
        name="month"
        id=""
        placeholder="Enter Month"
        v-model="dateobj.month"
      />
    </div>

    <div>
      <label for="year"> Year: </label>
      <input
        type="number"
        name="year"
        id=""
        placeholder="Enter Year"
        v-model="dateobj.year"
      />
    </div>

    <button>Get Day</button>
  </form>

  <h1>{{ customDate }}</h1>
</template>

<script>
import { onMounted, ref } from "vue";
import useDate from "../custom-hooks/useDate";

export default {
  setup() {
    const { date, getDay, getMonth, createCustomDate } = useDate();

    let day = ref(null);
    let month = ref(null);
    let currentDate = ref(null);
    let customDate = ref(null);
    let dateobj = ref({
      day: null,
      month: null,
      year: null,
    });

    onMounted(() => {
      currentDate.value = date.toString();
      day.value = getDay();
      month.value = getMonth();
    });

    function AddDate() {
      customDate.value = createCustomDate(
        dateobj.value.year,
        dateobj.value.month,
        dateobj.value.day
      );
    }

    return { currentDate, day, month, customDate, AddDate, dateobj };
  },
};
</script>

<style>
form {
  max-width: 350px;
  background-color: aqua;
  margin: 10px auto;
  height: 150px;
  padding: 10px;
  text-size-adjust: 1.5em;
  font-weight: 600;
  border-radius: 10px;
}

form > div {
  display: flex;
  margin: 10px auto;
  justify-content: space-around;
  text-align: left;
}

input {
  padding: 5px;
  width: 60%;
  border-radius: 5px;
  border: none;
}

button {
  margin-top: 10px;
  padding: 5px;
  border-radius: 5px;
  border: none;
  cursor: pointer;
}
</style>
