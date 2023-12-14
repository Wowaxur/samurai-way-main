import React from 'react';
import Posts from "./posts/Posts";
import s from './PostsBlock.module.css'
const PostsBlock = () => {
    return (
        <div className={s.PostsBlock}>
           <Posts text={'Hello World! Lorem ipsum dolor sit amet, consectetur adipisicing elit. Fugiat, vitae?'} imageSrc={'https://avatars.githubusercontent.com/u/62997222?v=4'}/>
           <Posts text={'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Commodi ut veniam vitae. Beatae cupiditate, debitis deserunt iusto nostrum omnis perspiciatis quasi? Animi labore libero quas.'}/>
           <Posts text={'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Commodi ut veniam vitae. Beatae cupiditate, debitis deserunt iusto nostrum omnis perspiciatis quasi? Animi labore libero quas.'}/>
           <Posts text={'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Commodi ut veniam vitae. Beatae cupiditate, debitis deserunt iusto nostrum omnis perspiciatis quasi? Animi labore libero quas.'}/>
           <Posts text={'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Commodi ut veniam vitae. Beatae cupiditate, debitis deserunt iusto nostrum omnis perspiciatis quasi? Animi labore libero quas.'}/>
           <Posts text={'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Commodi ut veniam vitae. Beatae cupiditate, debitis deserunt iusto nostrum omnis perspiciatis quasi? Animi labore libero quas.'}/>
           <Posts text={'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Commodi ut veniam vitae. Beatae cupiditate, debitis deserunt iusto nostrum omnis perspiciatis quasi? Animi labore libero quas.'}/>
           <Posts text={'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Commodi ut veniam vitae. Beatae cupiditate, debitis deserunt iusto nostrum omnis perspiciatis quasi? Animi labore libero quas.'}/>
           <Posts text={'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Commodi ut veniam vitae. Beatae cupiditate, debitis deserunt iusto nostrum omnis perspiciatis quasi? Animi labore libero quas.'}/>
           <Posts text={'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Commodi ut veniam vitae. Beatae cupiditate, debitis deserunt iusto nostrum omnis perspiciatis quasi? Animi labore libero quas.'}/>
        </div>
    );
};

export default PostsBlock;