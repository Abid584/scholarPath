import React from "react";

const Filters = ({
  setLoc,
  loc,
  setSubCat,
  subCat,
  setSchCat,
  schCat,
  setSort,
  sort,
}) => {
  return (
    <div className="flex flex-wrap justify-center gap-4">
      {/* Scholarship Category Filter */}
      <div>
        <select
          onChange={(e) => setSchCat(e.target.value)}
          value={schCat} // 👈 CHANGED: Controlled Input
          className="select select-bordered focus:outline-none focus:border-primary w-full max-w-xs"
        >
          <option value="" disabled>
            Scholarship Category
          </option>
          <option value="">All</option>
          <option value="Full fund">Full Fund</option>
          <option value="Partial fund">Partial Fund</option>
          <option value="Self fund">Self Fund</option>
        </select>
      </div>

      {/* Subject Category Filter */}
      <div>
        <select
          onChange={(e) => setSubCat(e.target.value)}
          value={subCat} // 👈 CHANGED: Controlled Input (This fixes your issue)
          className="select select-bordered focus:outline-none focus:border-primary w-full max-w-xs"
        >
          <option value="" disabled>
            Subject Category
          </option>
          <option value="">All</option>
          <option value="agriculture">Agriculture</option>
          <option value="engineering">Engineering</option>
          <option value="doctor">Doctor</option>
          <option value="architecture">Architecture</option>
          <option value="business">Business</option>
          <option value="computer Science">Computer Science</option>
          <option value="law">Law</option>
          <option value="arts">Arts</option>
          <option value="science">Science</option>
          <option value="mathematics">Mathematics</option>
        </select>
      </div>

      {/* Location Filter */}
      <div>
        <select
          onChange={(e) => setLoc(e.target.value)}
          value={loc} // 👈 CHANGED: Controlled Input
          className="select select-bordered focus:outline-none focus:border-primary w-full max-w-xs"
        >
          <option value="" disabled>
            Location
          </option>
          <option value="">All</option>
          <option value="USA">USA</option>
          <option value="UK">UK</option>
          <option value="Canada">Canada</option>
          <option value="Germany">Germany</option>
          <option value="Australia">Australia</option>
          <option value="Japan">Japan</option>
          <option value="France">France</option>
          <option value="Netherlands">Netherlands</option>
          <option value="Sweden">Sweden</option>
          <option value="Switzerland">Switzerland</option>
          <option value="China">China</option>
          <option value="Singapore">Singapore</option>
          <option value="New Zealand">New Zealand</option>
          <option value="South Korea">South Korea</option>
          <option value="Italy">Italy</option>
        </select>
      </div>

      {/* Sort by Application fees */}
      <div>
        <select
          onChange={(e) => setSort(e.target.value)}
          value={sort} // 👈 CHANGED: Controlled Input
          className="select select-bordered focus:outline-none focus:border-primary w-full max-w-xs"
        >
          <option value="" disabled>
            Sort by Fees
          </option>
          <option value="asc">Low to High</option>
          <option value="dsc">High to Low</option>
        </select>
      </div>
    </div>
  );
};

export default Filters;
