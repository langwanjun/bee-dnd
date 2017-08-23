
/**
 *
 * @title 单个元素拖拽
 * @description 将某个元素设置为可拖拽
 *
 */
class Demo1 extends Component {

    onStart(){
        console.log('start');
    }

    onStop(){
        console.log('stop');
    }
    render() {
        return (
            <div>
                <Dnd onStart={this.onStart} onStop={this.onStop}>
                    <div className="demo">我可随意拖拽</div>
                </Dnd>
            </div>

        );
    }
}