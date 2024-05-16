<script setup>
import axios from 'axios'
import { ref } from 'vue'
import { useRouter } from 'vue-router'

const router = useRouter()

const form = ref({
  email: null,
  password: null
})

const showPassword = ref(false)

const togglePasswordVisibility = () => {
  showPassword.value = !showPassword.value
}

const submit = () => {
  axios
    .post(`${import.meta.env.VITE_BASE_URL}/login`, form.value)
    .then(function (response) {
      localStorage.setItem('auth', response.data.data.token)
      router.push('/products')
    })
    .catch(function (error) {
      console.log(error)
    })
}
</script>
<template>
  <div class="flex flex-col min-h-screen">
    <nav class="flex justify-between p-8 text-black">
      <h1 class="text-xl font-bold">MASPOS</h1>
      <p>Call Us +62 817-1902-092</p>
    </nav>
    <div class="flex flex-col grow bg-blue-600">
      <div class="flex flex-col items-center justify-center bg-white py-12 w-full">
        <div class="bg-white p-6 rounded-lg shadow-lg sm:mx-auto sm:w-full sm:max-w-md">
          <h2 class="mt-10 text-center text-2xl font-bold leading-9 tracking-tight text-gray-900">
            Sign in to your account
          </h2>
          <form class="mt-10 space-y-6" @submit.prevent="submit">
            <div>
              <label for="email" class="block text-sm font-medium leading-6 text-gray-900"
                >Email address</label
              >
              <div class="mt-2">
                <input
                  v-model="form.email"
                  id="email"
                  name="email"
                  type="email"
                  autocomplete="email"
                  required
                  class="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                />
              </div>
            </div>
            <div>
              <label for="password" class="block text-sm font-medium leading-6 text-gray-900"
                >Password</label
              >
              <div class="mt-2 relative">
                <input
                  v-model="form.password"
                  :type="showPassword ? 'text' : 'password'"
                  id="password"
                  placeholder="Enter password"
                  class="block w-full rounded-md border-0 py-1.5 pr-9 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                />
                <div
                  class="absolute inset-y-0 right-0 pr-3 flex items-center cursor-pointer"
                  @click="togglePasswordVisibility"
                >
                  <template v-if="showPassword">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="24"
                      height="24"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      stroke-width="2"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      class="lucide lucide-eye"
                    >
                      <path d="M2 12s3-7 10-7 10 7 10 7-3 7-10 7-10-7-10-7Z" />
                      <circle cx="12" cy="12" r="3" />
                    </svg>
                  </template>
                  <template v-else>
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="24"
                      height="24"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      stroke-width="2"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      class="lucide lucide-eye-off"
                    >
                      <path d="M9.88 9.88a3 3 0 1 0 4.24 4.24" />
                      <path
                        d="M10.73 5.08A10.43 10.43 0 0 1 12 5c7 0 10 7 10 7a13.16 13.16 0 0 1-1.67 2.68"
                      />
                      <path
                        d="M6.61 6.61A13.526 13.526 0 0 0 2 12s3 7 10 7a9.74 9.74 0 0 0 5.39-1.61"
                      />
                      <line x1="2" x2="22" y1="2" y2="22" />
                    </svg>
                  </template>
                </div>
              </div>
            </div>
            <div class="flex justify-center">
              <button
                type="submit"
                class="flex justify-center rounded-md bg-blue-600 px-3 py-1.5 text-sm font-semibold leading-6 text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
              >
                Login
              </button>
            </div>
          </form>
        </div>
      </div>
      <div class="flex-grow bg-white"></div>
    </div>
  </div>
</template>
