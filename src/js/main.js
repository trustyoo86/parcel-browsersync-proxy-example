/**
 * application main file
 * 
 * @author kern
 * @since 2018.02.21 -draft
 */
import $ from 'jquery'
import ajaxUtil from './ajax'

$(() => {
  const ajaxPromise = ajaxUtil.get(`${location.origin}/api`)
  const $textarea = $('[data-input=result]')
  // ajax
  ajaxPromise
    .then((res) => {
      $textarea.val(JSON.stringify(res))
    })
})