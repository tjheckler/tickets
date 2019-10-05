<template>
  <div class="container-fluid mt-4">
    <h1 class="h1">Users</h1>

    <b-row>
      <b-col>
        <table class="table table-striped table-bordered">
          <thead>
            <tr>
              <th>Name</th>
              <th>Email</th>
              <th>Telephone</th>
              <th>Location</th>
              <th>Region</th>

              <th>&nbsp;</th>
            </tr>
          </thead>
          <tbody>
            <tr v-for="record in records" :key="record.userId">
              <td>{{record.name}}</td>
              <td>{{record.email}}</td>
              <td>{{record.telephone}}</td>
              <td>{{record.location}}</td>
              <td>{{record.region}}</td>
              <td class="text-right">
                <a href="#" @click.prevent="updateUser(record)">Edit</a>
                <a href="#" @click.prevent="deleteUser(record.userId)">Delete</a>
              </td>
            </tr>
          </tbody>
        </table>
      </b-col>
      <b-col lg="3">
        <b-card :title="(model.userId ? 'Edit User ID# ' + model.userId :'New User')">
          <form @submit.prevent="createUser">
            <b-form-group label="Name">
              <b-form-input type="text" v-model="model.name"></b-form-input>
            </b-form-group>
            <b-form-group label="Email">
              <b-form-input rows="4" v-model="model.email" type="email"></b-form-input>
            </b-form-group>
            <b-form-group label="Telephone">
              <b-form-input rows="4" v-model="model.telephone" type="tel"></b-form-input>
            </b-form-group>
            <b-form-group label="Location">
              <b-form-input rows="4" v-model="model.location" type="text"></b-form-input>
            </b-form-group>
            <b-form-group label="Region">
              <b-form-input rows="4" v-model="model.region" type="text"></b-form-input>
            </b-form-group>
            <div>
              <b-btn type="submit" variant="success">Save User</b-btn>
            </div>
          </form>
        </b-card>
      </b-col>
    </b-row>
  </div>
</template>
<script>
import api from "@/UsersApiService";

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
    async updateUser(user) {
      // you use Object.assign() to create a new (separate) instance
      this.model = Object.assign({}, user);
    },
    async createUser() {
      const isUpdate = !!this.model.userId;

      if (isUpdate) {
        await api.update(this.model.userId, this.model);
      } else {
        await api.create(this.model);
      }

      // Clear the data inside of the form
      this.model = {};

      // Fetch all records again to have latest data
      await this.getAll();
    },
    async deleteUser(id) {
      if (confirm("Are you sure you want to delete this record?")) {
        // if you are editing a record you deleted, remove it from the form
        if (this.model.userId === id) {
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