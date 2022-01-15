<template>
  <button class="user" @click="$emit('onClick')">
    <div class="user__pic">
      <img class="user__image" :src="avatar" alt="User Avatar">
    </div>
    <div class="user__name">{{ name }}</div>
  </button>
</template>

<script>
export default {
  name: 'user',
  props: {
    avatar: {
      type: String,
      required: true
    },
    name: {
      type: String,
      required: true
    }
  }
}
</script>

<style scoped>

  .user:hover .user__pic {
    border-color: #A6328D;
  }

  .user__pic {
    width: 92px;
    height: 92px;
    padding: 6px;
    border-radius: 50%;
    border: 2px solid #A6328D;
    transition: border-color .25s ease;
    overflow: hidden;
  }

  .user__name {
    margin-top: 10px;
    font-size: 12px;
    line-height: 1;
  }

  .user.--inline {
    display: flex;
    align-items: center;
  }

  .user.--cut .user__pic {
    width: 44px;
    height: 44px;
    margin-right: 14px;
    padding: 0;
    border: 0.5px solid rgba(0, 0, 0, 0.1);
  }

  .user.--cut .user__name {
    margin: 0;
    font-size: 18px;
    font-weight: 700;
  }

</style>
