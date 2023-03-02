import React from "react";
import Badge from 'react-bootstrap/Badge';

export default function CategoryPill({ text }) {
    return (
        <div>
          <Badge bg="secondary">
            {text}
          </Badge>{' '}
        </div>
    );
}

