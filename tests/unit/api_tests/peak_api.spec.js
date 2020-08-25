import { getAllPeaks } from "@/api/peak_api";
import { HTTP } from "@/http";

jest.mock("@/http");

test("fetch all peaks", async () => {
  const peaks = [
    {
      name: "Baker, Mount",
      display_name: "Mount Baker",
      elevation: 10781,
      lat: 48.7767,
      long: -121.8144,
      state: "WA",
      country: "USA",
      peakbagger_link: "https://www.peakbagger.com/peak.aspx?pid=1633",
      slug: "mount-baker-wa-usa-10781",
      _id: "5f3a13cde8b3e3492574f90b",
    },
  ];
  const mockedResponse = { data: peaks };
  HTTP.get.mockResolvedValue(mockedResponse);
  expect.assertions(1);
  const response = await getAllPeaks();
  expect(response).toEqual(peaks);
});
