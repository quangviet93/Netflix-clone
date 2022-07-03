<template>
  <div class="sidebar-admin">
    <v-list flat>
      <v-list-group
        v-for="(menu, index) in menus"
        :key="index"
        :append-icon="null"
        link
        v-model="menu.active"
      >
        <v-list-item
          slot="activator"
          :to="menu.link"
          class="sidebar-menu-item"
          link
          :elevation="4"
          active-class="active"
        >
          <v-list-item-icon>
            <v-icon class="sidebar-menu-item__icon">
              {{ menu.icon }}
            </v-icon>
          </v-list-item-icon>
          <v-list-item-title>
            <span class="sidebar-menu-item__label">
              {{ menu.label }}
            </span>
          </v-list-item-title>
        </v-list-item>
        <v-list-item
          class="sidebar-menu-item sidebar-menu-item__children"
          :class="{ active: (currentPath === sub.link) }"
          v-for="sub in menu.children"
          :key="sub.label"
          :to="sub.link"
          link
          :elevation="4"
        >
          <v-list-item-icon>
            <v-icon class="icon">{{ sub.icon }}</v-icon>
          </v-list-item-icon>
          <v-list-item-title>
            <span>
              {{ sub.label }}
            </span>
          </v-list-item-title>
        </v-list-item>
      </v-list-group>
    </v-list>
  </div>
</template>

<script>
export default {
  data() {
    return {
      currentPath: this.$router.currentRoute.path,
      menus: [
        {
          label: 'Dashboard',
          icon: 'mdi-home',
          link: '/admin/dashboard',
          active: false,
        },
        {
          label: 'Movie',
          icon: 'mdi-movie',
          active: false,
          children: [
            {
              label: 'List movies',
              icon: 'mdi-arrow-right-thin',
              link: '/admin/movie',
            },
            {
              label: 'Add new movie',
              icon: 'mdi-arrow-right-thin',
              link: '/admin/movie/add',
            },
          ],
        },
        {
          label: 'Genre',
          icon: 'mdi-shape-outline',
          active: false,
          children: [
            {
              label: 'List genres',
              icon: 'mdi-arrow-right-thin',
              link: '/admin/genre',
            },
            {
              label: 'Add new genre',
              icon: 'mdi-arrow-right-thin',
              link: '/admin/genre/add',
            },
          ],
        },
        {
          label: 'Actor',
          icon: 'mdi-account-group-outline',
          active: false,
          children: [
            {
              label: 'List actors',
              icon: 'mdi-arrow-right-thin',
              link: '/admin/actor',
            },
            {
              label: 'Add new actor',
              icon: 'mdi-arrow-right-thin',
              link: '/admin/actor/add',
            },
          ],
        },
      ],
    };
  },
  methods: {
    
  },
  watch:{
    $route(to){
      console.log('to', to)
      this.currentPath = to.path;
    }
} 
};
</script>

<style lang="scss" scoped>
.sidebar-admin {
  padding: 10px 0;
  position: fixed;
  top: 64px;
  left: 0;
  bottom: 0;
  width: 280px;
  height: 100%;
  z-index: 8;
  background: #ffffff;
  box-shadow: 0 0.15rem 1.75rem 0 rgba(33, 40, 50, 0.15);
}
.sidebar-menu-item {
  color: #000;
  text-decoration: none;
  height: 55px;
  display: flex;
  align-items: center;
  padding: 0 16px;
  cursor: pointer;
  border-radius: 4px;
  &.active {
    background-color: #e3f2fd;

    & .sidebar-menu-item__icon {
      color: #36f;
    }

    & .sidebar-menu-item__label {
      color: #36f;
      font-weight: 500;
    }
  }
  &__label {
    margin-left: 12px;
    font-weight: 500;
    font-size: 16px;
    color: #000;
  }

  &__icon {
    font-size: 20px;
    color: #000;
  }

  &__children {
    padding-left: 44px;

    &.active {
      background-color: transparent;
      & i {
        color: #36f;
      }

      & span {
        color: #36f;
      }
    }

    & span {
      font-weight: 500;
    }
  }
}
</style>
