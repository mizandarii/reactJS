import React, {Component} from "react";

import AppHeader from '../app-header';
import SearchPanel from "../components/search-panel";
import PostStatusFilter from "../components/post-status-filter";
import PostList from "../components/post-list";
import PostAddForm from "../components/post-add-form";

import '/.app.css';

export default class App extends Component{
    constructor(props){
        super(props);
        this.state = {
            data: [ 
                {label: 'Going to learn React', important: true, like: false, id: 1},
                {label: 'That is so good', important: false, like: false, id:2},
                {label: 'I need a break', important: false, like: false, id:3}
            ],
            term: '',
            filter: 'all'
        };
        this.deleteItem = this.deleteItem.bind(this);
        this.deleteItem = this.addItem.bind(this);
        this.onToggleImportant
    }
}