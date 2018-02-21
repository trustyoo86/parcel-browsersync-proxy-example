/**
 * ajax example
 * 
 * @since 2018.02.21 - draft
 */
import $ from 'jquery'

const ajaxUtil = {
  // ajax get
  get(url) {
    return new Promise((resolve, reject) => {
      $.ajax({
        url: url,
        success(res) {
          resolve(res)
        },
        error(err) {
          reject(err)
        }
      })
    })
  }
}

module.exports = ajaxUtil