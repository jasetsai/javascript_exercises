//using statements

namespace Sabio.Web.Services{
	


	public class UserAddressService : BaseService
	{

		public static Guid InsertAppUsersAddress(UserAddressModelRequest model)
		{

			Guid uid = Guid.Empty;

			//user execute query if it's not goint to be selecting rows
			DataProvider.ExecuteNonQuery(GetConnection, "dbo.AppUserAddresses_Create", inputParamMapper: delegate(SqlParameterCollection paramCollection)
			{

			paramCollection.AddWithValue("@AppUserId", "4");
			paramCollection.AddWithValue("@Address1", model.Address1);
			paramCollection.AddWithValue("@Address2", model.Address2);
			paramCollection.AddWithValue("@City", model.City);
			paramCollection.AddWithValue("@State", model.State);
			paramCollection.AddWithValue("@Zip", model.Zip);

			//just prepping for an output. not actually setting any strings.
			SqlParameter userAddressUId = new SqlParameter("@UId", System.Data.SqlDbType.UniqueIdentifier);
			userAddressUId.Direction = System.Data.ParameterDirect.Output;

			paramCollection.Add(userAddressUId);


			}, returnParameters: delegate(SqlParameterCollection param)
			{
				//turns it into a string, then type class guid
				Guid.TryParse(param["@Uid"].Value.ToStrin(), out uid);
			}
			);

		return uid;

		}
	}

}