import React from 'react'
import './PlayVideo.css'
import video1 from '../../assets/video.mp4'
import like from '../../assets/like.png'
import dislike from '../../assets/dislike.png'
import share from '../../assets/share.png'
import save from '../../assets/save.png'
import jack from '../../assets/jack.png'
import user_profile from '../../assets/user_profile.jpg'

const PlayVideo = () => {
    return (
        <div className='play-video'>
            <video src={video1} controls autoPlay muted></video>
            <h3>Learn Web Development</h3>
            <div className="play-video-info">
                <p>1525 views &bull; 2 days ago</p>
                <div>
                    <span>
                        <img src={like} alt="" /> 125
                    </span>
                    <span>
                        <img src={dislike} alt="" /> 2
                    </span>
                    <span>
                        <img src={share} alt="" /> Share
                    </span>
                    <span>
                        <img src={save} alt="" /> Save
                    </span>
                </div>
            </div>
            <hr />
            <div className="publisher">
                <img src={jack} alt="" />
                <div>
                    <p>Channel Name</p>
                    <span>1M Subscribers</span>
                </div>
                <button>Subscribe</button>
            </div>
            <div className="vid-description">
                <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Vitae reiciendis consequuntur laboriosam debitis doloremque quasi culpa alias perspiciatis ipsa numquam distinctio, eius repudiandae sapiente accusamus necessitatibus iure maiores illo facilis!</p>
                <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Sunt sed illum tenetur est nulla recusandae optio autem, dolorem voluptas illo, nesciunt ullam reiciendis voluptatibus, hic sequi amet! Itaque, unde corporis.</p>
                <hr />
                <h4>130 Comments</h4>
                <div className="comment">
                    <img src={user_profile} alt="" />
                    <div>
                        <h3>User name<span>1 day ago</span></h3>
                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quas, itaque suscipit magni quis doloremque velit libero unde nemo quia nostrum tempore sint sed iste praesentium tempora quod odio laborum magnam.</p>
                        <div className='comment-action'>
                            <img src={like} alt="" /><span>244</span>
                            <img src={dislike} alt="" /><span>10</span>
                        </div>
                    </div>
                </div>
                <div className="comment">
                    <img src={user_profile} alt="" />
                    <div>
                        <h3>User name<span>1 day ago</span></h3>
                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quas, itaque suscipit magni quis doloremque velit libero unde nemo quia nostrum tempore sint sed iste praesentium tempora quod odio laborum magnam.</p>
                        <div className='comment-action'>
                            <img src={like} alt="" /><span>244</span>
                            <img src={dislike} alt="" /><span>10</span>
                        </div>
                    </div>
                </div>
                <div className="comment">
                    <img src={user_profile} alt="" />
                    <div>
                        <h3>User name<span>1 day ago</span></h3>
                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quas, itaque suscipit magni quis doloremque velit libero unde nemo quia nostrum tempore sint sed iste praesentium tempora quod odio laborum magnam.</p>
                        <div className='comment-action'>
                            <img src={like} alt="" /><span>244</span>
                            <img src={dislike} alt="" /><span>10</span>
                        </div>
                    </div>
                </div>
            </div>
        </div >
    )
}
export default PlayVideo
