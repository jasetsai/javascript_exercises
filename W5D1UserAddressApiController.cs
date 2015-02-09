

// using statements

namespace Sabio.Web.Controllers.Api

{

	[RoutePrefix("api/users/address")]
	public class UsersAddressAPIController : UsersAddressAPIController

	{
		[Route("Create"), HttpPost]
		public HttpResponseMessage validateUsersAddress(UserAddressModelRequest model)
		{
			if (!ModelState.IsValid)
			{
				return Request.CreateErrorResponse(HttpStatuscode.BadRequest, ModelState);
			}


			//item response
			ItemResponse<Guid> response = new ItemResponse<Guid>();

			//callingthe service function with model as the argument
			Guid newId = UserAddressService.InsertAppUsersAddress(model);


			response.Item = newId;
			return Request.CreateResponse(response);

		}



	}
}