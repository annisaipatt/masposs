<script>
import axios from 'axios'

export default {
  data() {
    return {
      category: ''
    }
  },
  methods: {
    async addCategory() {
      const formData = new FormData()
      formData.append('category', this.category)

      try {
        await axios.post(`${import.meta.env.VITE_BASE_URL}/product`, formData, {
          headers: {
            Authorization: localStorage.getItem('auth'),
            'Content-Type': 'multipart/form-data'
          }
        })
        this.$emit('categoryAdded')
        this.$emit('close')
      } catch (error) {
        console.error('Failed to add category:', error)
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
    <div class="bg-white rounded-lg shadow-lg p-6 w-3/4 md:w-1/2 lg:w-1/3 relative">
      <button
        class="text-gray-500 hover:text-gray-900 absolute top-4 right-4"
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
      <h2 class="text-2xl font-bold mb-4">Add Category</h2>
      <div class="flex flex-col gap-3 items-center">
        <lable class="mt-5 text-sm">Category Name</lable>
        <div class="items-center flex mb-6 rounded-md">
          <input
            type="text"
            v-model="CategoryName"
            placeholder="Category Name"
            class="border rounded px-4 py-2 border-blue-500"
          />
        </div>
        <div class="flex justify-end gap-4 mt-4">
          <button
            @click="$emit('close')"
            class="rounded border-2 border-blue-500 hover:border-blue-600 px-4 py-2 text-blue-500 hover:text-blue-600"
          >
            Cancel
          </button>
          <button
            @click="addCategory"
            class="rounded bg-blue-500 hover:bg-blue-600 px-4 py-2 text-white"
          >
            Confirm
          </button>
        </div>
      </div>
    </div>
  </div>
</template>
