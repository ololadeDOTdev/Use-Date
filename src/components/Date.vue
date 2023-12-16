<template>
  <div class="container">
    <div class="headers">
      <h1>Date and Time</h1>
      <h2>
        Date:
        <h3>{{ currentDate }}</h3>
      </h2>
      <h2>
        Day:
        <h3>{{ day }}</h3>
      </h2>
      <h2>
        Month:
        <h3>{{ month }}</h3>
      </h2>
    </div>
    <div>
      <form @submit.prevent="AddDate">
        <div>
          <label for="day"> Day: </label>
          <div class="form-fill">
            <input
              type="number"
              name="day"
              id="choice"
              placeholder="Pick a Day"
              v-model="dateobj.day"
            />
          </div>
        </div>

        <div>
          <label for="month"> Month: </label>
          <div class="form-fill">
            <input
              type="number"
              name="month"
              id="choice"
              placeholder="Pick a Month"
              v-model="dateobj.month"
            />
          </div>
        </div>

        <div>
          <label for="year">Year: </label>
          <div class="form-fill">
            <input
              type="number"
              name="year"
              id="choice"
              placeholder="Pick a Year"
              v-model="dateobj.year"
            />
          </div>
        </div>

        <button class="btn">Submit</button>
      </form>

      <h1 class="result">{{ customDate }}</h1>
    </div>
  </div>
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
* {
  margin: 0;
  padding: 0;
  box-sizing: inherit;
}

html {
  font-size: 62.5%;
  box-sizing: border-box;
}

@media screen and (min-width: 920px) {
  body {
    font-family: "Nunito", sans-serif;
    font-weight: 400;
    height: 100vh;
    color: #333 !important;
    background-image: linear-gradient(to top left, #753682 0%, #bf2e34 100%);
    display: flex;
    align-items: center;
    justify-content: center;
  }

  h1,
  h2,
  h3 {
    text-align: left;
  }
  h1 {
    font-size: 3.5rem;
    margin-bottom: 3rem;
  }
  h2 {
    font-size: 2.5rem;
    margin-bottom: 20px;
    color: #444;
  }

  h3 {
    font-size: 2.2rem;
    margin: 10px 0 10px 0;
    color: #333;
  }
  .container {
    position: relative;
    width: 100rem;
    height: 50rem;
    background-color: rgba(255, 255, 255, 0.35);
    backdrop-filter: blur(200px);
    filter: blur();
    box-shadow: 0 3rem 5rem rgba(0, 0, 0, 0.25);
    border-radius: 9px;
    overflow: hidden;
    display: grid;
    grid-template-columns: 1fr 1fr;
  }

  .headers {
    background-color: rgba(255, 255, 255, 0.4);
    flex: 50%;
    padding: 9rem;
    display: flex;
    flex-direction: column;
    margin-top: -64px;
  }
  .form-fill {
    margin: 8px 0 16px 0;
    font-size: 2.2rem;
  }

  .btn {
    transform: translateX(-50%);
    color: #fff;
    background: none;
    border: none;
    font-family: inherit;
    font-size: 1.5rem;
    text-transform: uppercase;
    cursor: pointer;
    font-weight: 400;
    transition: all 0.2s;
    background-color: white;
    background-color: #c7365f;
    backdrop-filter: blur(10px);
    margin-left: 154px;
    padding: 1.2rem 4rem;
    border-radius: 50rem;
    box-shadow: 0 1.75rem 3.5rem rgba(0, 0, 0, 0.1);
  }

  form {
    max-width: 700px;
    margin: 10px auto;
    height: 500px;
    padding: 10px;
    text-size-adjust: 1.5em;
    font-weight: 600;
    border-radius: 10px;
    flex: 50%;
    padding: 9rem;
    display: flex;
    flex-direction: column;
    align-items: center;
    font-size: 2.2rem;
    margin-top: -70px;
  }

  form > div {
    margin: 10px auto;
    justify-content: space-around;
    text-align: left;
  }

  input {
    padding: 15px;
    width: 30rem;
    height: 500%;
    border-radius: 5px;
    border: none;
  }

  #choice {
    text-align: left;
    font-size: 1.7rem;
  }
  .result {
    font-size: 2.8rem;
    text-align: center;
  }
}

@media screen and (max-width: 920px) {
  form {
    max-width: 350px;
    background-color: violet;
    margin: 10px auto;
    height: 200px;
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
  #choice {
    text-align: left;
  }
}
</style>
