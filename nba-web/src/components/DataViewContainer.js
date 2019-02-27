import React from 'react';
import { ShotChart } from './ShotChart';
import {
    Slider, InputNumber, Row, Col, Radio
} from 'antd';

const RadioGroup = Radio.Group;

export class DataViewContainer extends React.Component {
    state = {
        inputValue: 1,
    }

    onChange = (value) => {
        this.setState({
            inputValue: value,
        });
    }

    render() {
        const { inputValue } = this.state;
        console.log("inputValue", inputValue);

        return (
            <div style={{ flex: 1 }}>
                <ShotChart
                    playerId={this.props.playerId}
                    minCount={2}
                    displayToolTips={true}
                    chartType="hexbin"
                />

                <Row>
                    <Col span={12}>
                        <Slider
                            min={12}
                            max={20}
                            onChange={this.onChange}
                            value={typeof inputValue === 'number' ? inputValue : 0}
                        />
                    </Col>
                    <Col span={4}>
                        <InputNumber
                            min={1}
                            max={20}
                            style={{ marginLeft: 16 }}
                            value={inputValue}
                            onChange={this.onChange}
                        />
                    </Col>
                </Row>

                <RadioGroup>
                    <Radio value="hexbin">Hexbin</Radio>
                    <Radio value="scatter">Scatter</Radio>
                </RadioGroup>
            </div>
        );
    }
}