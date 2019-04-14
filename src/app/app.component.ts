import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Posts } from './modal/posts';
import { PostserviceService } from './service/postservice.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  	postdata:Posts;
	postresults:any;
	likesupdate:any;
  errors: any[] = [];
	constructor(private postService: PostserviceService) { }

  ngOnInit() {
  	this.postdata = new Posts();
  	this.getPosts();
  }

      addPost() {
        console.log('hello', this.postdata);
        this.postService.addPosts(this.postdata).subscribe((data) => {
        	this.getPosts();
          this.postdata.posttext ='';
        }, (err) => {

        });

    }
        getPosts() {
        this.postService.getPosts().subscribe((data) => {
            this.postresults = data;
        });
    }
    	updatelikes(data)
    	{
		console.log(data);
		console.log('likes number',data.likes);
		var likesnumber = data.likes;
		likesnumber++
		console.log('newlikes',likesnumber);
		data.likes=likesnumber;
		console.log('maindata',data);
		this.postService.updateLikes(data).subscribe((data) => {
            this.getPosts();
        }, (err) => {

        });	
			
    	}
    	
}
