import React, { useState } from "react";

export default function Seat() {
  const [ticket, setticket] = useState(0);
  const [selectedSeat, setSelectedSet] = useState([])
  const [booked, setBooked] = useState(false);
  const ticketClass = {
    vip: "VIP",
    bisnness: "Bissness",
    economy: "economy",
  };

  const seat = [
    [1, 2, 3, 4, 5, 6, 7, 8],
    [1, 2, 3, 4, 5, 6, 7, 8],
    [1, 2, 3, 4, 5, 6, 7, 8],
    [1, 2, 3, 4, 5, 6, 7, 8],
    [1, 2, 3, 4, 5, 6, 7, 8],
    [1, 2, 3, 4, 5, 6, 7, 8],
    [1, 2, 3, 4, 5, 6, 7, 8],
    [1, 2, 3, 4, 5, 6, 7, 8],
  ];

  const handleclick = (a, b, c, e) => {
    if (e.target.style.backgroundColor === "red") {
      setticket(ticket - 1)
      e.target.style.backgroundColor = "green";
      const object = {
        class: c,
        row: b,
        column: a
      }
      const index = selectedSeat.findIndex((elem) => elem.class === object.class && elem.column === object.column && elem.row === object.row)
      const updateSelectedseat = [...selectedSeat];
      updateSelectedseat.splice(index, 1)
      setSelectedSet(updateSelectedseat);
    } else if (ticket === 5) {
      alert("only 5 ticket you can book");
    } else {
      const object = {
        class: c,
        row: b,
        column: a
      }
      setSelectedSet([...selectedSeat, object])
      setticket(ticket + 1);
      e.target.style.backgroundColor = "red";
    }
  };
  const handlebook = () => {
    if (!booked) {
      alert("your booking is successfully done");
      setBooked(true);
    }
  }
  return (
    <div className="container">

      <div className="seat-selecting-area">
        <h3>{ticketClass.vip}</h3>         {/*this is vip class section */}
        <div>
          {seat
            .filter((a, index) => index < 5)
            .map((elem, index) => (
              <div key={index}>
                {elem
                  .filter((a) => a <= 5)
                  .map((chair) => (
                    <button
                      key={chair}
                      onClick={(e) =>
                        handleclick(index + 1, chair, ticketClass.vip, e)
                      }
                      disabled={booked}
                    >
                      {chair}
                    </button>
                  ))}
              </div>
            ))}
        </div>
        <h3>{ticketClass.bisnness}</h3>         {/*this is bisness class section */}
        <div>
          {seat
            .filter((a, index) => index < 6)
            .map((elem, index) => (
              <div key={index}>
                {elem
                  .filter((a) => a <= 7)
                  .map((chair) => (
                    <button
                      key={chair}
                      onClick={(e) =>
                        handleclick(index + 1, chair, ticketClass.bisnness, e)
                      }
                      disabled={booked}
                    >
                      {chair}
                    </button>
                  ))}
              </div>
            ))}
        </div>
        <h3>{ticketClass.economy}</h3>         {/*this is economy class section */}
        <div>
          {seat
            .filter((a, index) => index < 7)
            .map((elem, index) => (
              <div key={index}>
                {elem
                  .filter((a) => a <= 8)
                  .map((chair) => (
                    <button
                      key={chair}
                      onClick={(e) =>
                        handleclick(index + 1, chair, ticketClass.economy, e)
                      }
                      disabled={booked}
                    >
                      {chair}
                    </button>
                  ))}
              </div>
            ))}
        </div>
      </div>
      <div className="booking-area">
        <h4>Concert Ticket Booking system</h4>
        <h5>You have selected {ticket}</h5>
        <>
          {
            Array.from(selectedSeat).map((elem, index) => (
              <li key={index}>{elem.class},{elem.column} {elem.row}</li>
            ))
          }
        </>
        <button onClick={handlebook} style={{ display: ticket > 0 ? "flex" : "none" }}>Book Tickets</button>

      </div>
    </div>
  );
}
