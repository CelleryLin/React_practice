// Component 一般習慣已大寫作為開頭，原因是要與html一般的tag做為區別，且不會有所衝突。
// 至於副檔名為何不是.js，其實兩者是沒有差別的，用.jsx主要是為了把React的語法給區分出來而已喔~

/*
// 引用一般tag時
<header>Header</header>

// 引用Component時，因js tag有大小寫之分，所以兩者並不相同
<Header title="Header"></Header>
*/

import React, { Component } from 'react'

export default class Header extends Component {
  render() {
    // `this.props`: 從 App.js 傳進來的參數們
    console.log(this.props);
    var title = this.props['title']
    var subtitles = this.props['subtitles']
    var body = this.props['body']
    
    return (
      // 一般html為class，React為了把class區分出來 (class為javascript的關鍵字) 變為className
      // react只能回傳單一節點，所以要用div把所有節點包起來
      <div className='header'>
        <h3>{title}</h3>
        <p>{subtitles}</p>
        {body}
      </div>
    )
  }
}