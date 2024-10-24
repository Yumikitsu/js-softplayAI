// do not change these lines
let adults = 0;
let children = 0;
let totalAdults = 0;
let totalChildren = 0;

// Function to register adults and children entering the soft play center
function enter(numAdults, numChildren) {
    if (numChildren > numAdults) {
        return false; // Each child must be accompanied by at least one adult
    }
    adults += numAdults;
    children += numChildren;
    totalAdults += numAdults;
    totalChildren += numChildren;
    return true;
}

// Function to register adults and children leaving the soft play center
function leave(numAdults, numChildren) {
    if (numChildren > numAdults) {
        return false; // Each child must be accompanied by at least one adult
    }
    if (adults - numAdults < children - numChildren) {
        return false; // There must be at least one adult for each child inside the center
    }
    if (numAdults > adults || numChildren > children) {
        return false; // Cannot leave more adults or children than currently inside
    }
    adults -= numAdults;
    children -= numChildren;
    return true;
}

// Function to return the current number of adults and children inside the soft play center
function occupancy() {
    return {
        adults: adults,
        children: children
    };
}

// Function to return the all-time totals of adults and children who have entered the soft play center
function total() {
    return {
        adults: totalAdults,
        children: totalChildren
    };
}

// Export the functions
module.exports = {
    enter: enter,
    leave: leave,
    occupancy: occupancy,
    total: total
};
