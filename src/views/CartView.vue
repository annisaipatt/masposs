<script>
import { cartStore } from '../stores/cartStore'

export default {
  data() {
    return {}
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
      alert('Payment Successful!')
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
    <nav class="font flex justify-between bg-blue-600 p-4 text-white">
      <h1 class="text-xl font-bold">MASPOS</h1>
      <p>Call Us +62 817-1902-092</p>
    </nav>
    <div class="bg-white p-10">
      <div class="overflow-x-auto">
        <table class="min-w-full">
          <thead>
            <tr class="bg-white">
              <th class="p-2 text-left">Product</th>
              <th class="p-2 text-left">Qty</th>
              <th class="p-2 text-left">Sub Total</th>
              <th class="p-2 text-lefts"></th>
            </tr>
          </thead>
          <tbody>
            <tr v-for="item in cartItems" :key="item.id">
              <td class="flex items-center p-2">
                <img :src="item.picture_url" class="mr-4 h-16 w-16 object-cover" />
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
              <td class="p-2 justify-evenly flex">
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
            <tr class="justify-between flex">
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
  </div>
</template>