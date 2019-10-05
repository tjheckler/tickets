<template>
  <div class="container-fluid mt-4">
    <h1 class="h1">Categories</h1>

    <b-row>
      <b-col>
        <table class="table table-striped table-bordered">
          <thead>
            <tr>
              <th>Category Name</th>

              <th>&nbsp;</th>
            </tr>
          </thead>
          <tbody>
            <tr v-for="record in records" :key="record.categoryId">
              <td>{{record.name}}</td>

              <td class="text-right">
                <a href="#" @click.prevent="updateCategory(record)">Edit</a>
                <a href="#" @click.prevent="deleteCategory(record.categoryId)">Delete</a>
              </td>
            </tr>
          </tbody>
        </table>
      </b-col>
      <b-col lg="3">
        <b-card
          :title="(model.categoryId ? 'Edit Category ID# ' + model.categoryId :'New Category')"
        >
          <form @submit.prevent="createCategory">
            <b-form-group label="Name">
              <b-form-input type="text" v-model="model.name"></b-form-input>
            </b-form-group>

            <div>
              <b-btn type="submit" variant="success">Save Category</b-btn>
            </div>
          </form>
        </b-card>
      </b-col>
    </b-row>
  </div>
</template>
<script>
import api from "@/CategoriesApiService";

export default {
  data() {
    return {
      records: [],
      model: {}
    };
  },
  async created() {
    this.getAll();
  },
  methods: {
    async getAll() {
      try {
        this.records = await api.getAll();
      } finally {
      }
    },
    async updateCategory(category) {
      // you use Object.assign() to create a new (separate) instance
      this.model = Object.assign({}, category);
    },
    async createCategory() {
      const isUpdate = !!this.model.categoryId;

      if (isUpdate) {
        await api.update(this.model.categoryId, this.model);
      } else {
        await api.create(this.model);
      }

      // Clear the data inside of the form
      this.model = {};

      // Fetch all records again to have latest data
      await this.getAll();
    },
    async deleteCategory(id) {
      if (confirm("Are you sure you want to delete this record?")) {
        // if you are editing a record you deleted, remove it from the form
        if (this.model.categoryId === id) {
          this.model = {};
        }

        await api.delete(id);
        await this.getAll();
      }
    }
  }
};
</script>
<style scoped>
</style>