require 'rubygems'
require 'sinatra'
require 'sinatra/json'
require 'gracenote'

puts 'Gracenote Begin ============================='
spec = {clientID: '15780864-DF67FF664D8508CB6FBFC0849D8F3211', clientTag: 'DF67FF664D8508CB6FBFC0849D8F3211'}
obj = Gracenote.new(spec)
obj.registerUser
puts 'Gracenote End ============================='

get '/debug' do
  results = obj.findArtist('Thrice')

  results.inspect

  # results_type = results.kind_of? Hash
  # results_type.inspect
end

get '/' do
  erb :index
end

post '/search' do
  results = obj.findArtist(params[:name])

  erb :search, locals: {results: results}
end
