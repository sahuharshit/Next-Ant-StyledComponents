import { Card } from 'antd';
import {Component} from 'react'
import styled from 'styled-components'
import Link from 'next/link'
const MyCard = styled(Card)`
    .ant-card-body {
    padding: 10px;
}
.ant-card.ant-card-bordered{
    margin-bottom: 30px !important;
}
.ant-card-meta-title {
  
    font-size: 20px;
    margin-bottom: 5px;
   
}
.ant-card-cover{
    border:1px solid #f3f3f3;
    border-bottom:0;
    padding: 1px;
}
@media only screen and (min-width: 768px) {
    /* tablets and desktop */
    width: 210px;
}
@media only screen and (max-width: 1200px) {
    /* portrait phones */
    width: 50vw;
}
@media only screen and (max-width: 1200px) and (orientation: landscape) {
    /* portrait phones */
    width: 200px;
}


`
const { Meta } = Card;

class CardComponent extends Component {
    
    render() {
        return ( 
            <div style={{marginBottom: 39}}>
              <Link href="https://t.me/jsdude1">
                <a>
                <MyCard
                hoverable
                cover={<img alt="example" src={this.props.imagesrc} style={{height: 190}} />}
            >
                <Meta style={{textAlign:'left', fontSize: '30px'}} title={this.props.title} />
                
                <h4 style={{textAlign:'left'}}>{this.props.onemonthprice}</h4>
                <h4 style={{textAlign:'left'}}>{this.props.sixmonthprice}</h4>
                <h4 style={{textAlign:'left'}}>{this.props.yearprice}</h4>

            </MyCard>
                </a>
              </Link>
            </div>

        );
        }
    }

    export default CardComponent;