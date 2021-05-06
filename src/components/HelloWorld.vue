<template>
  <div class="card">
    <div class="card-header">
      <div class="d-flex justify-content-between">
        <span>Listado de Usuarios</span>
        <div class="btn btn-primary">Agregar usuario</div>
      </div>
      
    </div>
    <div class="card-body">
      <div class="row">
        <div class="col-3">
          <input type="text" class='form-control'>
        </div>
        <div class="col-3">
          <input type="text" class='form-control'>
        </div>
        <div class="col-3">
          <input type="text" class='form-control'>
        </div>
        <div class="col-3">
          <input type="text" class='form-control'>
        </div>
      </div>

      <div class="row mt-2">
        <div class="col-6">
          <div class="btn btn-info">Guardar</div>
        </div>
        <div class="col-6">
          <div class="btn btn-danger">Cancelar</div>
        </div>
      </div>

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
          <tr>
            <td>[Editar] [Borrar]</td>
            <td>Juan</td>
            <td></td>
            <td></td>
          </tr>
          <tr>
            <td>[Editar] [Borrar]</td>
            <td>Pedro</td>
            <td></td>
            <td></td>
          </tr> 
        </tbody>
      </table>
    </div>
  </div>
</template>