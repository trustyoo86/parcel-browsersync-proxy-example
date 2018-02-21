import $ from 'jquery'
import ajaxUtil from './ajax'

$(() => {
  const ajaxPromise = ajaxUtil.get('/api')
  const $textarea = $('[data-input=result]')
  
  ajaxPromise
    .then((res) => {
      $textarea.val(JSON.stringify(res))
    })
})