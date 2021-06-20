import React, { useState, useCallback } from 'react';
import { Row, Col, Collapse, Button } from 'react-bootstrap';
import { PieChart } from 'react-minimal-pie-chart';
import { DataEntry } from 'react-minimal-pie-chart/types/commonTypes';
import { useDispatch } from 'react-redux';
import { filterBooksByCategory } from '../../store/modules/books/actions';

import './styles.scss';

interface CategoryChartProps {
  data: DataEntry[];
}

export const CategoryChart: React.FC<CategoryChartProps> = ({ data }) => {
  const dispatch = useDispatch();
  const [showChart, setShowChart] = useState(false);

  const filterBooks = useCallback((category: string) => {
    dispatch(filterBooksByCategory(category))
  }, [dispatch]);

  return (
    <div className="category-chart-container">
      <Button variant="info" onClick={() => setShowChart(!showChart)}>
        Exibir Gráfico
      </Button>
      <Collapse in={showChart} className="category-chart-container-collapse">
        <Row>
          <Col>
            <PieChart
              className="category-chart"
              label={label => `${Math.round(label.dataEntry.percentage)}%`}
              labelStyle={{ fontSize: '4px' }}
              data={data}
              onClick={(e, i) => filterBooks(String(data[i].title))}
              animate={true}
              animationDuration={3}
            />
          </Col>
          <Col>
            <div className="subtitle-container">
              <h3>Legenda:</h3>
              {
                data.map(item => (
                  <div key={item.title} className="subtitle-item">
                    <div style={{ backgroundColor: item.color }} />
                    <strong>{item.title}</strong>
                  </div>
                ))
              }
            </div>
          </Col>
        </Row>
      </Collapse>
    </div>
    
  );
}
