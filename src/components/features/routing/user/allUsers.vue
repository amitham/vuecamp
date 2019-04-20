<template>
  <div>
    <br>
    <table class="table">
      <thead>
        <tr>
          <th scope="col">#</th>
          <th scope="col">Firstname</th>
          <th scope="col">Lastname</th>
          <th scope="col"></th>
          <th scope="col"></th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <th scope="row">1</th>
          <td>Mark</td>
          <td>Otto</td>
          <td>
            <router-link class="nav-link" active-class="active" to="/routing/user/1/detail">
              <a href="javascript:void(0)">Detail</a>
            </router-link>
          </td>
          <td>
            <router-link class="nav-link" active-class="active" to="/routing/user/1/edit">
              <a href="javascript:void(0)">Edit</a>
            </router-link>
          </td>
        </tr>
        <tr>
          <th scope="row">2</th>
          <td>Jacob</td>
          <td>Thornton</td>
          <td>
            <router-link class="nav-link" active-class="active" to="/routing/user/2/detail">
              <a href="javascript:void(0)">Detail</a>
            </router-link>
          </td>
          <td>
            <router-link class="nav-link" active-class="active" to="/routing/user/2/edit">
              <a href="javascript:void(0)">Edit</a>
            </router-link>
          </td>
        </tr>
        <tr>
          <th scope="row">3</th>
          <td>Larry</td>
          <td>the Bird</td>
          <td>
            <router-link class="nav-link" active-class="active" to="/routing/user/3/detail">
              <a href="javascript:void(0)">Detail</a>
            </router-link>
          </td>
          <td>
            <router-link class="nav-link" active-class="active" to="/routing/user/3/edit">
              <a href="javascript:void(0)">Edit</a>
            </router-link>
          </td>
        </tr>
      </tbody>
    </table>
  </div>
</template>

<script>
export default {};
</script>

