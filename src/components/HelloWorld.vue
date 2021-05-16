<template>
  <div class="card">
    <div class="card-header">
      <div class="d-flex justify-content-between">
        <span>Listado</span>
        <div class="btn btn-primary" v-on:click='viewForm = true'>Agregar usuario</div>
      </div>
      
    </div>
    <div class="card-body">
      <div v-if='viewForm'>
        <div class="row">
          <div class="col-3">
            <input type="text" v-model='user.nombre' class='form-control' placeholder='nombre'>
          </div>
          <div class="col-3">
            <input type="text" v-model='user.apellidos' class='form-control' placeholder='apellidos'>
          </div>
          <div class="col-3">
            <input type="text" v-model='user.telefono' class='form-control' placeholder='telefono'>
          </div>
          <div class="col-3">
            <input type="text" v-model='user.correo' class='form-control' placeholder='correo'>
          </div>
        </div>

        <div class="row mt-2">
          <div class="col-6">
            <div class="btn btn-info" @click='store()'>Guardar</div>
          </div>
          <div class="col-6">
            <div class="btn btn-danger" @click='viewForm = false'>Cancelar</div>
          </div>
        </div>
      </div>

      <div v-if='users.length == 0'>
        <div>
          Aun no hay usuarios agregados
        </div>
      </div>

      <div v-else>
        <table class="table table-striped mt-2">
          <thead class="table-dark">
            <tr>
              <th>Opciones</th>
              <th>Nombre</th>
              <th>Telefono</th>
              <th>Correo</th>
            </tr>
          </thead>
          <tbody>
            <tr v-for="user in users" :key='user'>
              <td>
                <fas icon="edit" />
                <fas icon="trash" />
              </td>
              <td>{{ completeName( user ) }}</td>
              <td>{{ user.telefono }}</td>
              <td>{{ user.correo }}</td>
            </tr>
          </tbody>
        </table>
      </div> 
      
    </div>
  </div>
</template>

<script>
export default {
  name: 'HelloWorld',
  data () {
    return {
      viewForm: false,
      users: [],
      user: {
        nombre: '',
        apellidos: '',
        telefono: '',
        correo: ''
      },
    }
  },
  // Dentro de methods se especifican todos los metodos(funciones)
  methods: {
    completeName (el) {
      let nombre = `${el.nombre.charAt(0).toUpperCase()}${el.nombre.slice(1)}`,
          apellidos = el.apellidos.charAt(0).toUpperCase() + el.apellidos.slice(1)
      return `${nombre} ${apellidos}`
    },
    store() {
      // guardar en db
      let newUser = {
        nombre: this.user.nombre,
        apellidos: this.user.apellidos,
        telefono: this.user.telefono,
        correo: this.user.correo
      }
      this.users.push( newUser )
    },
  }
}
</script>