import { Component, Input } from '@angular/core';
import { Post } from './interfaces/post';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Lab17AngularSocialPosts';

  @Input() addtitle: string="";
  @Input() addthought: string ="";

theposts: Post[] = [
{title: 'Grand Cirus', thought: 'Grand Circus is cool.'},
{title: 'Ritual', thought: 'Ritual is a well developed app.'},
{title: 'Facebook', thought: 'FB is a very social app.'},
{title: 'Music Lovers', thought: 'Janet Jackson will be performing at the Fox.'},
{title: 'Food for Thought', thought: 'Eating cherries everyday can decrease heart disease.'},
{title: 'Grand Cirus', thought: 'Grand Circus is teaching all of their students Angular now.'},
{title: 'Dev Build', thought: 'Dev Build is an awesome program. You can learn alot from it.'}
  ];




  onsubmit() {

    this.theposts.push(
      {

        title: this.addtitle,
        thought: this.addthought
      }

    );
    
    
  }
    
    
    
    
    
    onDelete(thepost: Post) {

      for(let i=0; i<this.theposts.length; i++) {

        if(this.theposts[i] == thepost) {

          this.theposts.splice(i,1);
          return;
        }
      }
    }
   



}



