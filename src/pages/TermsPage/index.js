import React from 'react';

import './style.css';
import PartRevolution from '../../components/PartRevolution';

class TermsPage extends React.Component {

    constructor (props) {
        super(props);
        this.state = {

        }

        this.props.changeSpecialClass('');
    }

    componentDidMount () {
        window.scrollTo(0, 0);
    }

    render () {
        return (
            <div className='terms-page'>
                <div className='terms-clip-effect-page'></div>
                <div className='terms-body'>
                    <div className='terms-page-title1'>Terms of service</div>
                    <div className='terms-page-title2'>Last updated: January 10, 2020</div>
                    <div className='terms-contents'>
                        <h5>What is Lorem Ipsum?</h5>
                        <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.</p>

                        <h5>Why do we use it?</h5>
                        <p>It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using 'Content here, content here', making it look like readable English. Many desktop publishing packages and web page editors now use Lorem Ipsum as their default model text, and a search for 'lorem ipsum' will uncover many web sites still in their infancy. Various versions have evolved over the years, sometimes by accident, sometimes on purpose (injected humour and the like).</p>

                        <h5>What is Lorem Ipsum?</h5>
                        <p>Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classical Latin literature from 45 BC, making it over 2000 years old. Richard McClintock, a Latin professor at Hampden-Sydney College in Virginia, looked up one of the more obscure Latin words, consectetur, from a Lorem Ipsum passage, and going through the cites of the word in classical literature, discovered the undoubtable source. Lorem Ipsum comes from sections 1.10.32 and 1.10.33 of "de Finibus Bonorum et Malorum" (The Extremes of Good and Evil) by Cicero, written in 45 BC. This book is a treatise on the theory of ethics, very popular during the Renaissance. The first line of Lorem Ipsum, "Lorem ipsum dolor sit amet..", comes from a line in section 1.10.32.</p>
                        <p>The standard chunk of Lorem Ipsum used since the 1500s is reproduced below for those interested. Sections 1.10.32 and 1.10.33 from "de Finibus Bonorum et Malorum" by Cicero are also reproduced in their exact original form, accompanied by English versions from the 1914 translation by H. Rackham.</p>

                        <h5>Nullam ac ligula ut metus luctus faucibus.</h5>
                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque id libero porta, cursus ante sed, pharetra tortor. Mauris ac volutpat sapien, in gravida nunc. Ut sollicitudin metus interdum leo commodo, vitae semper magna sollicitudin. Aliquam rhoncus nec felis vel feugiat. In hac habitasse platea dictumst. Nullam tincidunt eros at tortor viverra luctus. Integer ac ex eget enim scelerisque commodo. Phasellus sollicitudin sagittis elit in mollis.</p>
                        <p>Ut vitae nulla tellus. Phasellus tristique vel ante non luctus. Fusce sodales tortor vitae massa commodo, non egestas mauris consectetur. Praesent nec maximus arcu. Phasellus a orci quis risus bibendum sollicitudin. Integer a ultricies lacus. Sed suscipit tristique massa, a aliquam leo tincidunt quis. Fusce blandit, lacus vel pulvinar rutrum, libero purus tristique sem, sit amet tempor nisl eros non nunc. Donec augue quam, aliquam vitae tortor sit amet, aliquet dictum libero. Quisque vitae tristique nibh. Integer non leo nec tellus pellentesque semper. Nulla quis mauris laoreet, rutrum dui sit amet, vulputate erat.</p>
                        <p>Donec cursus semper dui id fringilla. Morbi sodales tempus tortor sed suscipit. In mi arcu, mattis at maximus nec, lacinia sed felis. Praesent pulvinar posuere massa, nec molestie urna fermentum vitae. Donec aliquet elit pharetra orci suscipit efficitur. Orci varius natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. In tempor eleifend dui, sed dignissim ipsum suscipit ut. Vivamus diam est, pulvinar sit amet metus vel, condimentum ullamcorper ante. Ut sollicitudin purus et commodo rhoncus. Proin sollicitudin sapien eget vulputate tristique. Praesent auctor lectus sed tincidunt congue. Donec et erat nec metus dapibus vehicula non at justo. Phasellus lobortis bibendum ex, non fringilla arcu lacinia vel.</p>

                        <h5>Sed in neque nec turpis convallis porta.</h5>
                        <p>Praesent lectus neque, imperdiet at viverra ac, pulvinar ut dui. Aenean sit amet lectus justo. In in leo mi. Donec quis pretium dolor. Maecenas odio quam, consequat eget massa in, mollis dictum turpis. Aenean tristique condimentum fermentum. Etiam in velit cursus libero gravida aliquam. Suspendisse sollicitudin eget velit id tincidunt. Morbi efficitur justo quis est porttitor, vel blandit nibh lacinia. Ut accumsan, quam in venenatis tempus, nibh urna iaculis arcu, et dapibus tortor lacus quis augue. Sed volutpat lacinia lorem, eget lobortis lacus. In venenatis arcu vel ullamcorper efficitur. Sed laoreet quis mauris sit amet vulputate. Morbi malesuada hendrerit nulla vel bibendum. Mauris egestas urna ullamcorper dui scelerisque semper. Fusce et pellentesque nunc, eu laoreet risus.</p>
                        <p>Curabitur malesuada dictum orci, non imperdiet purus facilisis in. Integer bibendum ipsum finibus tortor vestibulum laoreet. Aliquam dapibus, purus at consequat gravida, mi diam facilisis lacus, vestibulum sollicitudin nibh turpis porttitor mauris. Vestibulum non turpis eget nulla ullamcorper commodo. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum laoreet ante a lacus mollis, quis ultricies velit placerat. Integer facilisis cursus condimentum. Donec eget vulputate velit, eget viverra quam. Proin nec pellentesque purus, porttitor rutrum est. Vivamus malesuada sem est, ac luctus lorem eleifend sed. Etiam ut nisl vitae eros pretium pellentesque. Nunc luctus egestas lacinia.</p>
                    </div>
                </div>
                <PartRevolution />
            </div>
        );
    }
}

export default TermsPage;