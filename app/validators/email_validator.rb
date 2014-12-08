class EmailValidator < ActiveModel::EachValidator
  def validate(record)
    unless record.email.ends_with?("building-blocks.com")
      errors[:base] << "Please use a valid Building Blocks email address"
    end
  end
end