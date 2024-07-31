
// console.log(GetAllRoomsUrl)
// getData(GetAllRoomsUrl);






// const roomService = (api)=>{



//    let response = getData(api);
//    console.log(response);
//    let roomDatas = new Room();

//    response.then(
//     data=>{
//         let response =  data.map(room => new Room(
//             room.roomName,
//             room.roomUrlName,
//             room.roomImgUrl,
//             room.roomDescription,
//             room.id,
//             room.createdDate,
//             room.updatedDate,
//             room.deletedDate
//           ));
//         console.log(response);
//     }
//    ).catch(
//        error=>{
//            console.error(error);
//        }
//    );
// }

// roomService(GetAllRoomsUrl);

let roomService = (rooms)=>{
    let roomSection = document.getElementById("accommodation");
    let roomHtml = "";
    
    rooms.forEach(room => {
        console.log(room)

       roomHtml += `
        <div class="bg-slate-50 rounded-xl flex flex-col gap-4 justify-center items-center my-4 mx-4 md:mx-2">
                <span class="text-2xl font-semibold mt-3">${room.roomName}</span>
                <img src="${room.roomImgUrl}" alt="">
                <p class="text-center font-md">${room.roomDescription}</p>
                <button type="button "
                    class="mb-4 border-2 py-2 px-5 hover:bg-orange-200 hover:text-white duration-300">View
                    Detail</button>
            </div>
        `;
    });

    roomSection.innerHTML = roomHtml;
}

const getAllRoomService =  (api)=>{
    let response = getData(api);

    response.then(data=>{
        console.log(data);

        roomService(data);
    }).catch(errors=>{
        throw new Error(errors);
    })
}

getAllRoomService(GetAllRoomsUrl);





