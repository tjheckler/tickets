<template>
  <div class="container-fluid mt-4">
    <h1 class="h1">Locations</h1>

    <b-row>
      <b-col>
        <table class="table table-striped table-bordered">
          <thead>
            <tr>
              <th>Location Name</th>

              <th>&nbsp;</th>
            </tr>
          </thead>
          <tbody>
            <tr v-for="record in records" :key="record.locationId">
              <td>{{record.name}}</td>

              <td class="text-right">
                <a href="#" @click.prevent="updateLocation(record)">Edit</a>
                <a href="#" @click.prevent="deleteLocation(record.locationId)">Delete</a>
              </td>
            </tr>
          </tbody>
        </table>
      </b-col>
      <b-col lg="3">
        <b-card
          :title="(model.locationId ? 'Edit Location ID# ' + model.locationId :'New Location')"
        >
          <form @submit.prevent="createLocation">
            <b-form-group label="Name">
              <b-form-input type="text" v-model="model.name"></b-form-input>
            </b-form-group>

            <div>
              <b-btn type="submit" variant="success">Save Location</b-btn>
            </div>
          </form>
        </b-card>
      </b-col>
    </b-row>
  </div>
</template>
<script>
import api from "@/LocationsApiService";

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
    async updateLocation(location) {
      // you use Object.assign() to create a new (separate) instance
      this.model = Object.assign({}, location);
    },
    async createLocation() {
      const isUpdate = !!this.model.locationId;

      if (isUpdate) {
        await api.update(this.model.locationId, this.model);
      } else {
        await api.create(this.model);
      }

      // Clear the data inside of the form
      this.model = {};

      // Fetch all records again to have latest data
      await this.getAll();
    },
    async deleteLocation(id) {
      if (confirm("Are you sure you want to delete this record?")) {
        // if you are editing a record you deleted, remove it from the form
        if (this.model.locationId === id) {
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