<template>
  <div class="catalogBigContainer">
    <div class="title">
      Создание курса
    </div>
    <div class="createBox">
      <button class="saveButton absolute" @click="saveCourse">
        <font-awesome-icon style="font-size: 20px" icon="save" />
        <span>Сохранить</span>
      </button>
      <div class="createCourseBox">
        <div class="mr5">
          <Input :item="course.name" />
          <Description :item="course.description" />
          <Input :item="course.price" />
          <div class="filterBox">
            <div class="item">
              <div class="title">
                Категория:
              </div>
              <InputSelect :value="course.type" :options="options" :change="changeSelect" />
            </div>
          </div>
        </div>
        <div class="previewCreateItem">
          <div class="title">
            Предварительный просмотр
          </div>
          <CatalogItem :item="course" :index="0" :create="true" :clear-img="clearImg" :change-img="changeImg" />
        </div>
      </div>
      <button class="saveButton" @click="onAdd">
        <font-awesome-icon style="font-size: 18px" :icon="['fas', 'plus']" />
        <span>Добавить</span>
      </button>
      <transition-group name="list" tag="div">
        <CreateItem v-for="item in list" :key="item.id" :on-delete="onDelete" :on-change="onChange" :item="item" />
      </transition-group>
    </div>
  </div>
</template>

<script>
import { ADD_TOAST_MESSAGE } from 'vuex-toast'
import { mapActions, mapGetters } from 'vuex'
import CreateItem from '../../../components/courseItem/courseItem'
import CatalogItem from '../../../components/catalogTemplate/item'
import Input from '../../../components/smallComponents/input'
import Description from '../../../components/smallComponents/description'
import InputSelect from '../../../components/smallComponents/inputSelect/inputSelect'

export default {
  components: {
    InputSelect,
    Input,
    Description,
    CreateItem,
    CatalogItem
  },
  data: () => {
    return {
      course: {
        createdUser: {
          id: '',
          userName: ''
        },
        name: {
          name: 'Наименование',
          value: 'Название курса',
          focus: false
        },
        price: {
          name: 'Стоимость',
          value: '1000',
          focus: false
        },
        description: {
          name: 'Описание',
          value: 'Описание курса там с суперским текстом мы чет там говорим по поводу носков и не только',
          focus: false
        },
        img: '',
        list: [],
        type: 'Растяжка'
      },
      options: [
        'Растяжка',
        'Face fitness',
        'Йога'
      ]
    }
  },
  computed: mapGetters({
    getUser: 'auth/getUser'
  }),
  methods: {
    ...mapActions({ createCourse: 'course/createCourse' }),
    clearImg () {
      this.course.img = ''
    },
    changeSelect (value) {
      this.course.type = value
    },
    changeImg (e) {
      const file = e.target.files[0]
      const { type } = file
      if (type !== 'image/jpeg' && type !== 'image/png') { return }
      const reader = new FileReader()
      reader.readAsDataURL(file)
      reader.onload = () => {
        this.course.img = reader.result
      }
      reader.onerror = function (error) {
        console.log('Error: ', error)
      }
    },
    onDelete (id) {
      this.list = this.list.filter(el => el.id !== id)
    },
    onAdd () {
      this.list.push({ name: '123', id: Math.random(), description: 'description', video: '', position: 0, like: 0, show: 0 })
    },
    onChange (id, value) {

    },
    saveCourse () {
      const { img, list, type, name, description, price, createdUser } = this.course
      const data = {
        description: description.value,
        name: name.value,
        img,
        list,
        type,
        createdUser,
        price: Number(price.value)
      }
      this.createCourse(data)
      // .then(() => {
      //   this.$router.back()
      //   this.$store.dispatch(ADD_TOAST_MESSAGE, { text: 'Курс добавлен', type: 'success' })
      // })
    }
  },
  created () {
    console.log(this)
    const { _id, userName } = this.getUser
    this.course.createdUser = {
      id: _id,
      userName
    }
  }
}
</script>

<style lang="sass">
  @import '~assets/main.sass'

  .list-enter-active, .list-leave-active
    transition: all 0.5s
    max-height: 500px

  .list-enter, .list-leave-to
    opacity: 0
    padding-bottom: 0
    margin-bottom: 0
    max-height: 0

  .addVideo
    border-radius: 3px
    margin-bottom: 30px
    background: $accent
    width: 40px
    height: 40px
    display: flex
    align-items: center
    justify-content: center
    cursor: pointer
    svg path
      fill: $white
  .createBox
    background-color: $white
    border-radius: 3px
    box-shadow: 0 1px 3px rgba(0, 0, 0, .1), 0 10px 15px rgba(0, 0, 0, .08)
    width: 100%
    padding: 30px
    position: relative

  .createCourseBox
    display: flex
    padding-bottom: 30px
    > div
      width: 50%;
    border-bottom: 1px solid $accent
    margin-bottom: 30px

  .previewCreateItem
    width: 100%
    > .title
      margin-left: 60px
</style>
