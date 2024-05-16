<script>
import axios from 'axios'

export default {
  data() {
    return {
      productName: '',
      price: '',
      category: '',
      image: null
    }
  },
  methods: {
    async addProduct() {
      const formData = new FormData()
      formData.append('name', this.productName)
      formData.append('price', this.price)
      formData.append('category', this.category)
      formData.append('image', this.image)

      try {
        await axios.post(`${import.meta.env.VITE_BASE_URL}/product`, formData, {
          headers: {
            Authorization: localStorage.getItem('auth'),
            'Content-Type': 'multipart/form-data'
          }
        })
        this.$emit('productAdded')
        this.$emit('close')
      } catch (error) {
        console.error('Failed to add product:', error)
      }
    },
    handleImageUpload(event) {
      this.image = event.target.files[0]
    }
  }
}
</script>

<template>
  <div class="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50">
    <div class="relative w-3/4 rounded-lg bg-white p-6 shadow-lg md:w-1/2 lg:w-1/3">
      <button
        class="absolute right-4 top-4 text-gray-500 hover:text-gray-900"
        @click="$emit('close')"
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          class="h-6 w-6"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
        >
          <path
            stroke-linecap="round"
            stroke-linejoin="round"
            stroke-width="2"
            d="M6 18L18 6M6 6l12 12"
          />
        </svg>
      </button>
      <h2 class="mb-4 text-2xl font-bold">Add Product</h2>
      <div class="flex flex-col justify-between gap-4">
        <label
          class="flex h-36 w-40 cursor-pointer flex-col items-center justify-center rounded-lg border-2 border-dashed bg-blue-50"
        >
          <input type="file" class="hidden" @change="handleImageUpload" />
          <span class="text-blue-500">Upload Image</span>
        </label>
        <div class="absolute right-0 z-10 mb-6 mr-3 w-60 rounded-md">
          <label class="mt-5 px-2 text-sm font-semibold">Product Name</label>
          <input
            type="text"
            v-model="productName"
            placeholder="Product Name"
            class="rounded border border-blue-500 px-4 py-2"
          />
          <label class="px-2 text-sm font-semibold">Price</label>
          <input
            type="text"
            v-model="price"
            placeholder="Input price"
            class="rounded border px-4 py-2 border-blue-500"
          />
        </div>
        <label class="mt-5 px-2 text-sm font-semibold">Select category</label>
        <select v-model="category" class="rounded border border-blue-500 px-4 py-2">
          <option value="" disabled>Select category</option>
          <option value="Makanan">Makanan</option>
          <option value="Minuman">Minuman</option>
          <option value="Lainnya">Lainnya</option>
        </select>
        <div class="mt-32 flex justify-end gap-4">
          <button
            @click="$emit('close')"
            class="rounded border border-blue-600 px-4 py-2 text-blue-700 hover:bg-gray-100"
          >
            Cancel
          </button>
          <button
            @click="addProduct"
            class="rounded bg-blue-600 px-4 py-2 text-white hover:bg-blue-700"
          >
            Confirm
          </button>
        </div>
      </div>
    </div>
  </div>
</template>
