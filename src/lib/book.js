import React from 'react';
import Select from './select'
class Book extends React.Component {
	constructor() {
        super();
        this.state = {

        }
    }
    render() {

		// console.log(this.props);
		const title = this.props.book.title;
		const authors = this.props.book.authors;
		const url = this.props.book.imageLinks.smallThumbnail;
		const { book } = this.props;
		const thumbnail = book.imageLinks ? book.imageLinks.smallThumbnail : "https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1522993996514&di=e39b1868536e1890cf3b108989b209cf&imgtype=0&src=http%3A%2F%2Fimg.mp.itc.cn%2Fupload%2F20160325%2Fb4cf34ac41024f92a3fdfb605b8c64c3_th.jpg";
		return(
			<li>
		 	 <div className="book">
		 	   <div className="book-top">
		 		 <div className="book-cover" style={{ width: 128, height: 193, backgroundImage: `url("${url}")` }}></div>
		 		 <div className="book-shelf-changer">
		 			<Select key={title}  book={this.props.book} changeShelf={this.props.changeShelf} />
		 		 </div>
		 	   </div>
		 	   <div className="book-title">{title}</div>
		 	   <div className="book-authors">{authors}</div>
		 	 </div>
		    </li>
		)
    }
}
export default Book
