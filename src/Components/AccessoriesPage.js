import React, { useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Dropdown, DropdownButton } from 'react-bootstrap';
import acc1 from "../images/acc1.png";
import acc2 from "../images/acc2.png";
import acc3 from "../images/acc3.png";
import acc4 from "../images/acc4.png";

// Updated data with hoverImgSrc
const initialAccessories = [
  {
    id: 1,
    name: 'Harvest Gold',
    price: '1,000.00 AFN',
    oldPrice: '1,400.00 AFN',
    imgSrc: acc1,
    hoverImgSrc: acc3,
    tag: 'Sale',
    sizes: [36, 37, 38, 'ONE SIZE'],
  },
  {
    id: 2,
    name: 'Sunset Red',
    price: '1,000.00 AFN',
    oldPrice: '1,500.00 AFN',
    imgSrc: acc2,
    hoverImgSrc: acc1,
    tag: 'Sale',
    sizes: [39, 40, 41],
  },
  {
    id: 3,
    name: 'Vegan Woolly Footbed',
    price: '1,800.00 AFN',
    oldPrice: '',
    imgSrc: acc4,
    hoverImgSrc: acc1,
    tag: '',
    sizes: ['ONE SIZE'],
  },
];

const AccessoriesPage = () => {
  const [accessories, setAccessories] = useState(initialAccessories);

  // Track which product is hovered
  const [hoveredId, setHoveredId] = useState(null);

  // Sorting
  const [sortBy, setSortBy] = useState('Featured');

  // Sizes
  const allSizes = Array.from(
    new Set(initialAccessories.flatMap((item) => item.sizes))
  ).sort((a, b) => {
    if (typeof a === 'number' && typeof b === 'number') {
      return a - b;
    } else if (typeof a === 'number') {
      return -1;
    } else if (typeof b === 'number') {
      return 1;
    } else {
      return a.toString().localeCompare(b.toString());
    }
  });

  const [selectedSizes, setSelectedSizes] = useState([]);
  const [showSizeDropdown, setShowSizeDropdown] = useState(false);

  // Handle size checkbox toggling
  const handleSizeToggle = (size) => {
    if (selectedSizes.includes(size)) {
      setSelectedSizes(selectedSizes.filter((s) => s !== size));
    } else {
      setSelectedSizes([...selectedSizes, size]);
    }
  };

  // Reset all selected sizes
  const handleResetSizes = () => {
    setSelectedSizes([]);
  };

  // Handle sort changes
  const handleSortChange = (event) => {
    setSortBy(event.target.value);
  };

  // 1) Filter by selected sizes
  let filteredAccessories = [...accessories];
  if (selectedSizes.length > 0) {
    filteredAccessories = filteredAccessories.filter((item) =>
      item.sizes.some((size) => selectedSizes.includes(size))
    );
  }

  // 2) Sort
  if (sortBy === 'Alphabetically, A-Z') {
    filteredAccessories.sort((a, b) => a.name.localeCompare(b.name));
  } else if (sortBy === 'Alphabetically, Z-A') {
    filteredAccessories.sort((a, b) => b.name.localeCompare(a.name));
  } else if (sortBy === 'Price, low to high') {
    filteredAccessories.sort(
      (a, b) =>
        parseFloat(a.price.replace(',', '').replace(/[^\d.]/g, '')) -
        parseFloat(b.price.replace(',', '').replace(/[^\d.]/g, ''))
    );
  } else if (sortBy === 'Price, high to low') {
    filteredAccessories.sort(
      (a, b) =>
        parseFloat(b.price.replace(',', '').replace(/[^\d.]/g, '')) -
        parseFloat(a.price.replace(',', '').replace(/[^\d.]/g, ''))
    );
  }

  return (
    <div className="container my-5">
      <h1 className="mb-4">Accessories Collection</h1>

      {/* Top Bar: Filter & Sort & Product Count */}
      <div className="d-flex flex-wrap justify-content-between align-items-center mb-3">
        {/* Filter: Size */}
        <div className="position-relative">
          <button
            className="btn btn-outline-secondary"
            onClick={() => setShowSizeDropdown(!showSizeDropdown)}
          >
            Filter: Size ⬇
          </button>
          {showSizeDropdown && (
            <div
              className="bg-white border p-3 position-absolute"
              style={{ zIndex: 1000 }}
            >
              <div className="d-flex justify-content-between mb-2">
                <span>{selectedSizes.length} selected</span>
                <button
                  className="btn btn-link p-0 text-decoration-none"
                  onClick={handleResetSizes}
                >
                  Reset
                </button>
              </div>
              {allSizes.map((size) => (
                <div key={size} className="form-check">
                  <input
                    className="form-check-input"
                    type="checkbox"
                    id={`size-${size}`}
                    checked={selectedSizes.includes(size)}
                    onChange={() => handleSizeToggle(size)}
                  />
                  <label className="form-check-label" htmlFor={`size-${size}`}>
                    {size}
                  </label>
                </div>
              ))}
            </div>
          )}
        </div>

        {/* Sort dropdown */}
        <div className="d-flex align-items-center">
          <span className="me-2">Sort by:</span>
          <select
            className="form-select"
            style={{ width: '200px' }}
            value={sortBy}
            onChange={handleSortChange}
          >
            <option>Featured</option>
            <option>Best selling</option>
            <option>Alphabetically, A-Z</option>
            <option>Alphabetically, Z-A</option>
            <option>Price, low to high</option>
            <option>Price, high to low</option>
            <option>Date, new to old</option>
            <option>Date, old to new</option>
          </select>
        </div>

        {/* Product count */}
        <div>{filteredAccessories.length} products</div>
      </div>

      {/* Product Grid */}
      <div className="row">
        {filteredAccessories.map((item) => (
          <div
            key={item.id}
            className="col-6 col-md-4 col-lg-3 mb-4"
            onMouseEnter={() => setHoveredId(item.id)}
            onMouseLeave={() => setHoveredId(null)}
          >
            <div className="card h-100 position-relative">
              {/* Sale badge */}
              {item.tag === 'Sale' && (
                <span
                  className="position-absolute bg-dark text-white px-2 py-1"
                  style={{ fontSize: '0.8rem', top: '10px', left: '10px' }}
                >
                  Sale
                </span>
              )}
              <img
                src={hoveredId === item.id ? item.hoverImgSrc : item.imgSrc}
                className="card-img-top"
                alt={item.name}
                style={{ height: '200px', objectFit: 'cover' }}
              />
              <div className="card-body d-flex flex-column">
                <h6 className="card-title">{item.name}</h6>
                {item.oldPrice && (
                  <p className="mb-1 text-muted">
                    <del>{item.oldPrice}</del>
                  </p>
                )}
                <p className="fw-bold">{item.price}</p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default AccessoriesPage;
