package proj.pet.member.domain;

public enum Country {
	KOREA,
	USA,
	UK,
	CANADA,
	JAPAN,
	FRANCE,
	GERMANY,
	ITALY,
	JORDAN,
	ARMENIA,
	RUSSIA,
	BRAZIL,
	NETHERLANDS,
	TURKEY,
	LUXEMBOURG,
	ARMENIAN,
	SPAIN,
	SWITZERLAND,
	UAE,
	THAILAND,
	PORTUGAL,
	UKRAINE,
	ROMANIA,
	FINLAND,
	CZECH,
	AUSTRIA,
	AUSTRALIA,
	MALAYSIA,
	BELGIUM,
	MOROCCO,
	ETC,
	;

	public static Country from(String country) {
		return Country.valueOf(country.toUpperCase());
	}
}
