<template>
  <div class="createItemBox">
    <div class="title">
      <Input :item="name"/>
      <div class="saveButton" v-on:click="onDelete(item.id)">
        <font-awesome-icon style="font-size: 18px" :icon="['fas', 'trash']"/>
        <span>Удалить</span>
      </div>
    </div>
    <div class="videoBlock">
      <div class="customFileBox video">
        <input @change="addVideo" type="file" name="image2" id="customImg" accept=".gif, .jpg, .png" />
        <label for="customImg">
          <span>Загрузить видео</span>
          <font-awesome-icon size="2x" style="color: white}" :icon="['fas', 'download']"/>
        </label>
      </div>
    </div>
    <div class="description">
      <Description :item="description"/>
    </div>

  </div>
</template>

<script>
  import Input from '../smallComponents/input'
  import Description from '../smallComponents/description'

  export default {
    components: {
      Input, Description
    },
    props: ['item', 'onDelete', 'onChange'],
    data: () => {
      return {
        name: {
          name: 'Наименование',
          value: 'Название видео',
          focus: false
        },
        description: {
          name: 'Описание',
          value: 'Описание видео',
          focus: false
        },
        video: ''
      }
    },
    methods: {
      clearVideo() {
        this.head.img = ''
      },
      addVideo(e) {
        e.preventDefault()
        const file = e.target.files[0]
        const {type} = file
        // if (type !== 'image/jpeg' && type !== 'image/png') return
        const reader = new FileReader();
        reader.readAsDataURL(file);
        reader.onload = () => {
          this.head.img = reader.result
        };
        reader.onerror = function (error) {
          console.log('Error: ', error);
        };
      }
    }
  }
</script>

<style lang="sass">
  .createItemBox
    border-bottom: 1px solid rgba(0,0,0,0.1)
    margin-bottom: 50px
    padding-bottom: 50px
    &:last-child
      border-bottom: none
      margin-bottom: 0
      padding-bottom: 0
  .title
    display: flex
    .labelGroup
      flex: 1
  .description
    margin-top: 15px
    .labelGroup
      margin-bottom: 0
    .labelGroup textarea
      max-width: 100%
</style>
