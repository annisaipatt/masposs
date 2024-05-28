<script>
import { cartStore } from '../stores/cartStore'

export default {
  data() {
    return {
      isPaymentSuccessful: false // New data property to control the popup visibility
    }
  },
  methods: {
    removeItem(productId) {
      cartStore.removeItem(productId)
    },
    incrementQuantity(productId) {
      cartStore.incrementQuantity(productId)
    },
    decrementQuantity(productId) {
      cartStore.decrementQuantity(productId)
    },
    payBill() {
      // Handle the payment process
      // Simulate successful payment
      this.isPaymentSuccessful = true
    },
    closePopup() {
      this.isPaymentSuccessful = false
      this.$router.push('/products') // Navigate back to home when the popup is closed
    }
  },
  computed: {
    cartItems() {
      return cartStore.items
    },
    totalBill() {
      return cartStore.totalBill
    }
  }
}
</script>

<template>
  <div class="flex min-h-screen flex-col">
    <nav class="flex justify-between bg-blue-600 p-5 px-36 text-white">
      <h1 class="text-l font-bold">MASPOS</h1>
      <div class="flex items-center justify-end gap-2">
        <div class="">John doe</div>
        <img
          src="https://source.unsplash.com/random/?person"
          class="size-8 rounded-full object-cover"
          alt="Profile"
        />
      </div>
    </nav>
    <div class="bg-white p-10 px-36">
      <div class="overflow-x-auto">
        <table class="min-w-full">
          <thead>
            <tr class="bg-white">
              <th class="p-2 text-left">Product</th>
              <th class="p-2 text-left">Qty</th>
              <th class="p-2 text-left">Sub Total</th>
              <th class="text-lefts p-2"></th>
            </tr>
          </thead>
          <tbody>
            <tr v-for="item in cartItems" :key="item.id">
              <td class="flex items-center p-2">
                <img :src="item.picture_url" class="mr-4 h-28 w-28 rounded-lg object-cover" />
                <div>
                  <div class="font-bold">{{ item.name }}</div>
                  <div class="mr-6 font-bold text-black">Rp. {{ item.price.toLocaleString() }}</div>
                </div>
              </td>
              <td>
                <div class="flex items-center gap-3">
                  <button
                    @click="decrementQuantity(item.id)"
                    class="rounded-full bg-blue-500 px-3 py-1 font-medium text-white hover:bg-blue-600"
                  >
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      class="h-6 w-3"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                    >
                      <path
                        stroke-linecap="round"
                        stroke-linejoin="round"
                        stroke-width="2"
                        d="M20 12H4"
                      />
                    </svg>
                  </button>
                  <input
                    class="mx-2 w-12 text-center font-bold"
                    :value="item.quantity"
                    type="text"
                  />
                  <button
                    @click="incrementQuantity(item.id)"
                    class="rounded-full bg-blue-500 px-3 py-1 font-medium text-white hover:bg-blue-600"
                  >
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      class="h-6 w-3"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                    >
                      <path
                        stroke-linecap="round"
                        stroke-linejoin="round"
                        stroke-width="2"
                        d="M12 6v12m0-6h6m-6 0H6"
                      />
                    </svg>
                  </button>
                </div>
              </td>
              <td class="p-2 font-bold">Rp. {{ (item.price * item.quantity).toLocaleString() }}</td>
              <td class="flex justify-evenly p-2">
                <button
                  @click="removeItem(item.id)"
                  class="rounded bg-red-600 px-2 py-1 font-normal text-white"
                >
                  Remove Item
                </button>
              </td>
            </tr>
          </tbody>
          <tfoot>
            <tr class="flex justify-between">
              <td class="p-2 text-right font-bold" colspan="2">Total</td>
              <td class="p-2 font-bold">Rp. {{ totalBill.toLocaleString() }}</td>
            </tr>
          </tfoot>
        </table>
      </div>
      <div class="mt-6 flex justify-end gap-4">
        <button
          @click="$router.push('/products')"
          class="rounded border-2 border-blue-500 px-4 py-2 font-semibold text-blue-600"
        >
          Back to Home
        </button>
        <button @click="payBill" class="rounded bg-blue-500 px-4 py-2 font-semibold text-white">
          Pay Bill
        </button>
      </div>
    </div>
    <div
      v-if="isPaymentSuccessful"
      class="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50"
    >
      <div class="rounded-lg bg-white p-6 text-center shadow-lg">
        <div class="mb-4 text-2xl font-bold">Payment Successful</div>
        <div class="mb-4 flex items-center justify-center">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            class="h-12 w-12 text-green-500"
            viewBox="0 0 20 20"
            fill="currentColor"
          >
            <path
              fill-rule="evenodd"
              d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-10.707a1 1 0 00-1.414-1.414L9 9.586 7.707 8.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
              clip-rule="evenodd"
            />
          </svg>
        </div>
        <div class="mb-6 font-bold text-lg">Rp. {{ totalBill.toLocaleString() }}</div>
        <button
          @click="closePopup"
          class="rounded border border-blue-600 px-4 py-2 font-semibold text-blue-600"
        >
          Back to Home
        </button>
      </div>
    </div>
  </div>
</template>
